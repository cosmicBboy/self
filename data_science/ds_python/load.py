# These data are taken from:
# ------------------------------------------
# Behavioral Risk Factor Surveillance System
# link - http://www.cdc.gov/brfss/
# ------------------------------------------
#
# Prevalence and Trends Data
# link - http://apps.nccd.cdc.gov/brfss/


import pandas


class Loader(Object):
    
# url = 'http://www.fdic.gov/bank/individual/failed/banklist.html'
url = 'http://apps.nccd.cdc.gov/brfss/list.asp?cat=HI&yr=2013&qkey=8671&state=All'
# match = 'Nationwide (States, DC, and Territories)'
attrs = {'border': 1, 'cellpadding': 5, 'cellspacing': 0}
data = pandas.io.html.read_html(url, attrs=attrs)
print data[0]
