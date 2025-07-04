SELECT
  "Booking".id,
  "Booking".uid,
  "Booking"."eventTypeId",
  "Booking".title,
  "Booking".description,
  "Booking"."startTime",
  "Booking"."endTime",
  "Booking"."createdAt",
  "Booking".location,
  "Booking".paid,
  "Booking".status,
  "Booking".rescheduled,
  "Booking"."userId",
  et."teamId",
  et.length AS "eventLength",
  CASE
    WHEN ("Booking".rescheduled IS TRUE) THEN 'rescheduled' :: text
    WHEN (
      ("Booking".status = 'cancelled' :: "BookingStatus")
      AND ("Booking".rescheduled IS NULL)
    ) THEN 'cancelled' :: text
    WHEN ("Booking"."endTime" < NOW()) THEN 'completed' :: text
    WHEN ("Booking"."endTime" > NOW()) THEN 'uncompleted' :: text
    ELSE NULL :: text
  END AS "timeStatus",
  et."parentId" AS "eventParentId",
  u.email AS "userEmail",
  u.username,
  "Booking"."ratingFeedback",
  "Booking".rating,
  "Booking"."noShowHost",
  false AS "isTeamBooking"
FROM
  (
    (
      "Booking"
      LEFT JOIN "EventType" et ON (("Booking"."eventTypeId" = et.id))
    )
    LEFT JOIN users u ON ((u.id = "Booking"."userId"))
  )
WHERE
  (et."teamId" IS NULL)
UNION
SELECT
  "Booking".id,
  "Booking".uid,
  "Booking"."eventTypeId",
  "Booking".title,
  "Booking".description,
  "Booking"."startTime",
  "Booking"."endTime",
  "Booking"."createdAt",
  "Booking".location,
  "Booking".paid,
  "Booking".status,
  "Booking".rescheduled,
  "Booking"."userId",
  et."teamId",
  et.length AS "eventLength",
  CASE
    WHEN ("Booking".rescheduled IS TRUE) THEN 'rescheduled' :: text
    WHEN (
      ("Booking".status = 'cancelled' :: "BookingStatus")
      AND ("Booking".rescheduled IS NULL)
    ) THEN 'cancelled' :: text
    WHEN ("Booking"."endTime" < NOW()) THEN 'completed' :: text
    WHEN ("Booking"."endTime" > NOW()) THEN 'uncompleted' :: text
    ELSE NULL :: text
  END AS "timeStatus",
  et."parentId" AS "eventParentId",
  u.email AS "userEmail",
  u.username,
  "Booking"."ratingFeedback",
  "Booking".rating,
  "Booking"."noShowHost",
  TRUE AS "isTeamBooking"
FROM
  (
    (
      "Booking"
      LEFT JOIN "EventType" et ON (("Booking"."eventTypeId" = et.id))
    )
    LEFT JOIN users u ON ((u.id = "Booking"."userId"))
  )
WHERE
  (et."teamId" IS NOT NULL);