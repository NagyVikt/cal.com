import type { Account, IdentityProvider, Prisma, User, VerificationToken } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import type { Adapter } from "next-auth/adapters";

import type { PrismaClient } from "@calcom/prisma";

import { identityProviderNameMap } from "./identityProviderNameMap";

/** @return { import("next-auth/adapters").Adapter } */
export default function CalComAdapter(prismaClient: PrismaClient): Adapter {
  return {
    createUser: (data: Prisma.UserCreateInput) => prismaClient.user.create({ data }),
    getUser: (id: string | number) =>
      prismaClient.user.findUnique({ where: { id: typeof id === "string" ? parseInt(id) : id } }),
    getUserByEmail: (email: User["email"]) => prismaClient.user.findUnique({ where: { email } }),
    async getUserByAccount(provider_providerAccountId: {
      providerAccountId: Account["providerAccountId"];
      provider: User["identityProvider"];
    }) {
      let _account;
      const account = await prismaClient.account.findUnique({
        where: {
          provider_providerAccountId,
        },
        select: { user: true },
      });
      if (account) {
        return (_account = account?.user) ?? null;
      }

      // NOTE: this code is our fallback to users without Account but credentials in User Table
      // We should remove this code after all Google tokens have expired
      const provider = provider_providerAccountId?.provider.toUpperCase() as IdentityProvider;
      if (!["GOOGLE", "SAML"].includes(provider)) {
        return null;
      }
      const obtainProvider = identityProviderNameMap[provider].toUpperCase() as IdentityProvider;
      const user = await prismaClient.user.findFirst({
        where: {
          identityProviderId: provider_providerAccountId?.providerAccountId,
          identityProvider: obtainProvider,
        },
      });
      return user || null;
    },
    updateUser: ({ id, ...data }: Prisma.UserUncheckedCreateInput) =>
      prismaClient.user.update({ where: { id }, data }),
    deleteUser: (id: User["id"]) => prismaClient.user.delete({ where: { id } }),
    async createVerificationToken(data: VerificationToken) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id: _, ...verificationToken } = await prismaClient.verificationToken.create({
        data,
      });
      return verificationToken;
    },
    async useVerificationToken(identifier_token: Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id: _, ...verificationToken } = await prismaClient.verificationToken.delete({
          where: { identifier_token },
        });
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2025") return null;
        }
        throw error;
      }
    },
    linkAccount: (data: Prisma.AccountCreateInput) => prismaClient.account.create({ data }),
    unlinkAccount: (provider_providerAccountId: Prisma.AccountProviderProviderAccountIdCompoundUniqueInput) =>
      prismaClient.account.delete({ where: { provider_providerAccountId } }),
  };
}
