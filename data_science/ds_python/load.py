# These data are taken from:
# ------------------------------------------
# Behavioral Risk Factor Surveillance System
# link - http://www.cdc.gov/brfss/
# ------------------------------------------
#
# Prevalence and Trends Data
# link - http://apps.nccd.cdc.gov/brfss/


import pandas


class Loader(object):
    def __init__(self, params=None):
        self.params = params

    def setParams(self, params):
        self.params = params
        return self

    def setHtmlAttrs(self, attrs):
        self.params.attrs = attrs
        return self

    def loadHtml(self):
        try:
            url = self.params['url']
        except:
            print('no url specified.')

        try:
            attrs = self.params['attrs']
        except:
            attrs = None

        try:
            header = self.params['header']
        except:
            header = None

        data = pandas.io.html.read_html(url, header=header, attrs=attrs)

        if len(data) == 1:
            self.data = data[0]
        else:
            self.data = data

        return self

if __name__ == "__main__":
    url = 'http://apps.nccd.cdc.gov/brfss/list.' \
        'asp?cat=HI&yr=2013&qkey=8671&state=All'
    attrs = {'border': 1, 'cellpadding': 5, 'cellspacing': 0}
    params = {'url': url, 'attrs': attrs}

    load = Loader()
    load.setParams(params)
    load.loadHtml()
