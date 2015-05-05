# Transformer Class

import json
import numpy as np


class Transformer(object):
    def __init__(self, data):
        self.data = data

    def setTransformDictionary(self, filepath):
        '''
        transform dictionary is a series
        of key-value pairs used to transform
        the data.
        '''
        with open(filepath) as fp:
            self.tDict = json.load(fp)
        return self

    def flipTransformDictionary(self):
        tDict = self.tDict
        return {v: k for k, v in tDict.items()}

    def transformData(self):
        return self

    def filterData(self, colName, filterVals):
        df = self.data
        self.data = df[df[colName].isin(filterVals)]
        return self

    def addCol(self, idx, colName, rowVals=None):
        try:
            rowVals = rowVals
        except:
            print('row values not speficied')
            rowVals = np.nan

        self.data.insert(idx, colName, rowVals)
        return self

    def renameCol(self, idx, colName):
        self.data.columns.values[idx] = colName
        return self

    def setIndex(self, indexName):
        '''indexName is the column name to set index to'''
        self.data = self.data.set_index(indexName)
        return self

    def toJson(self, params):
        return self.data.to_json(**params)

if __name__ == "__main__":
    from load import Loader

    # Load the data
    url = 'http://apps.nccd.cdc.gov/brfss/list.' \
        'asp?cat=HI&yr=2013&qkey=8671&state=All'
    attrs = {'border': 1, 'cellpadding': 5, 'cellspacing': 0}
    params = {
        'url': url,
        'header': 0,
        'attrs': attrs
    }

    load = Loader()
    load.setParams(params)
    data = load.loadHtml().data

    # Transform the data
    jsonFp = './states.json'
    colName = 'State:'

    # initiate transformer object
    transform = Transformer(data)
    transform.setTransformDictionary(jsonFp)

    # get long values of the states
    statesDict = transform.flipTransformDictionary()
    states = statesDict.keys()

    # filter the data
    transform.filterData(colName, states)
    statesAbbr = [statesDict[state] for state in transform.data[colName]]
    transform.addCol(1, 'StateAbbr', statesAbbr)

    # rename column values
    transform.renameCol(0, "State")

    # set index
    transform.setIndex('StateAbbr')

    # save to json
    fp = '../../app/public/data/brfss1.json'
    jsonParams = {'path_or_buf': fp, 'orient': 'index'}
    transform.toJson(jsonParams)