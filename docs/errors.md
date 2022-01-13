![An image](/CommonErrors_banner.png)
# Common errors
This section features common errors that might be encountered when setting up the page or might be encountered when
further developing on this platform.

## 1.
::: danger Error
Could not find a version that satisfies the requirement cmarkgfm==0.5.0 (from versions: 0.1.0al, 0.1.0a2, 0.1.0, ...)
ERROR: No matching distribution found for cmarkgfm==0.5.0
:::
### Solution
Go in the requirements.in file and change around the 'cmarkgfm' version number.
My occurring error got fixed with changing it to 0.6.0 in the config file fixed it

## 2.
::: danger Error
TypeError: "time" is an invalid keyword argument for QuizChallengeModel ctfd 1 1 172-18-0.1 --[25/Nov/2021:10:57:41+0000]
"POST /api/v1/challenges HTTP/1.1" 500 37 "http: //loc ctfd 1 | sqlalchemy.exc. InvalidRequestError: Table
"quiz _challenge model' is already defined for this Meti stance. Specify
"extend existing=True' to redefine options and columns on an existing Table object.
ctfd-proofofconcept ctfd_l exited with code 1
:::
### Solution
This Error occurred while programming a new plugin that is using a newly added field type (like "time").
This can be fixed du to fulfilling a database migration, so the database knows how to deal with the new column name such
as "time".

## 3.
::: danger Error
ctfd_1   | [SQL: INSERT INTO quiz_challenge_model (id, timer, variant_a, variant_b, variant_c, variant_d, correct_variant) VALUES (%(id)s, %(timer)s, %(variant_a)s, %(variant_b)s, %(variant_c)s, %(variant_d)s, %(correct_variant)s)]
ctfd_1   | [parameters: {'id': 4, 'timer': '2', 'variant_a': '2', 'variant_b': '2', 'variant_c': '2', 'variant_d': '2', 'correct_variant': 'B'}]
ctfd_1   | (Background on this error at: http://sqlalche.me/e/2j85)
ctfd_1   | 172.18.0.1 - - [25/Nov/2021:11:07:16 +0000] "POST /api/v1/challenges HTTP/1.1" 500 37 "http://localhost:8000/admin/challenges/new" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"

:::
### Solution
Exception is raised when the database encounters an internal error, e.g. the cursor is not valid anymore, the transaction is out of sync, etc.
This error is a DBAPI Error and originates from the database driver (DBAPI), not SQLAlchemy itself.
The InternalError is sometimes raised by drivers in the context of the database connection being dropped, or not being
able to connect to the database.

## 4.
::: danger Error
ERROR [CTFd] Exception on /api/v1/challenges/13 [GET]
ctfd_1   | Traceback (most recent call last):
ctfd_1   |   File "/usr/local/lib/python3.7/site-packages/flask/app.py", line 1950, in full_dispatch_request
:::
### Solution
The Error occurred when the API had to fetch a data type that it didn't know. The solution was to update the variable name via a migration.
