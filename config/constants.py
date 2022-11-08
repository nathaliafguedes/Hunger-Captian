import os
import pytz

STATUS = (
    ('active', 'Active'),
    ('inactive', 'Inactive'),
    ('deleted', 'Deleted'),
)

STATUS_DICT = dict(STATUS)

CATEGORIES = (
    ('hot', 'Hot'),
    ('bagel', 'Bagel'),
    ('cold', 'Cold'),
)

CATEGORIES_DICT = dict(CATEGORIES)