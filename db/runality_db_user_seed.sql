use runality_db;


INSERT INTO `Users`
(`description`,
`email`,
`firstName`,
`lastName`,
`displayName`,
`userType`,
`photo`,
`tShirtSize`,
`phone`,
`address1`,
`address2`,
`city`,
`state`,
`country`,
`zipcode`,
`birthDate`,
`gender`,
`emergencyFName`,
`emergencyLName`,
`emergencyPhone`,
`createdAt`,
`updatedAt`
)
VALUES
('I have many years of life that gives me the unique ability to know that people won''t exercise unless it is easy',
'pat@pat.com',
'Pat',
'Carlson',
'Pat',
'coach',
'',
'L',
'555-555-5555',
'1313 Mockingbird Lane',
'',
'San Jose',
'CA',
'US',
'95005',
'1975-12-15',
'F',
'Craig',
'Carlson',
'444-444-4444',
curdate(),
curdate()
);

INSERT INTO `Users`
(`description`,
`email`,
`firstName`,
`lastName`,
`displayName`,
`userType`,
`photo`,
`tShirtSize`,
`phone`,
`address1`,
`address2`,
`city`,
`state`,
`country`,
`zipcode`,
`birthDate`,
`gender`,
`emergencyFName`,
`emergencyLName`,
`emergencyPhone`,
`createdAt`,
`updatedAt`
)
VALUES
('I a hit the ground running type of person so be ready to work it out!',
'bob@bob.com',
'Bob',
'Bob',
'Bob',
'coach',
'',
'XXL',
'554-555-5555',
'134 Wisteria Lane',
'',
'San Jose',
'CA',
'US',
'95045',
'1985-10-15',
'M',
'Julie',
'Bob',
'445-444-4444',
curdate(),
curdate()
);
INSERT INTO `Users`
(`description`,
`email`,
`firstName`,
`lastName`,
`displayName`,
`userType`,
`photo`,
`tShirtSize`,
`phone`,
`address1`,
`address2`,
`city`,
`state`,
`country`,
`zipcode`,
`birthDate`,
`gender`,
`emergencyFName`,
`emergencyLName`,
`emergencyPhone`,
`createdAt`,
`updatedAt`
)
VALUES
('',
'Matt@Mat.com',
'Matt',
'Matt',
'Matt',
'athlete',
'',
'L',
'553-555-5555',
'1313 Seagull Lane',
'',
'San Jose',
'CA',
'US',
'95012',
'1999-02-15',
'M',
'Bunny',
'Matt',
'446-444-4444',
curdate(),
curdate()
);
INSERT INTO `Users`
(`description`,
`email`,
`firstName`,
`lastName`,
`displayName`,
`userType`,
`photo`,
`tShirtSize`,
`phone`,
`address1`,
`address2`,
`city`,
`state`,
`country`,
`zipcode`,
`birthDate`,
`gender`,
`emergencyFName`,
`emergencyLName`,
`emergencyPhone`,
`createdAt`,
`updatedAt`
)
VALUES
('I love running because I have a lot of experience running from spiders',
'Zoe@Zoe.com',
'Zoe',
'Zoe',
'Zoe',
'ahlete',
'',
'S',
'552-555-5555',
'1313 Bluebird Lane',
'',
'San Jose',
'CA',
'US',
'95044',
'1995-07-15',
'F',
'Zach',
'Zoe',
'448-444-4444',
curdate(),
curdate()
);

INSERT INTO `Users`
(`description`,
`email`,
`firstName`,
`lastName`,
`displayName`,
`userType`,
`photo`,
`tShirtSize`,
`phone`,
`address1`,
`address2`,
`city`,
`state`,
`country`,
`zipcode`,
`birthDate`,
`gender`,
`emergencyFName`,
`emergencyLName`,
`emergencyPhone`,
`createdAt`,
`updatedAt`
)
VALUES
('I am an easy going trainer who likes to stop for donuts along the way....come join me!',
'Sue@Sue.com',
'Sue',
'Sue',
'Sue',
'coach',
'',
'XXXL',
'551-555-5555',
'1313 Emu Lane',
'',
'San Jose',
'CA',
'US',
'95013',
'2000-08-15',
'F',
'Sal',
'Sue',
'449-444-4444',
curdate(),
curdate()
);


INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (1,2,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (1,3,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (1,4,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (1,5,curdate(),curdate());

INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (3,1,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (3,2,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (3,4,curdate(),curdate());
INSERT INTO UserPrograms (programId,userId,createdAt, `updatedAt`) VALUES (3,5,curdate(),curdate());
