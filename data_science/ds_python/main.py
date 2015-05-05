import json
import io
from load import Loader
from transform import Transformer
from urls import urlData


def pipeline_load(params):
    pass


def pipeline_filter(transformDictFp, filterColName):
    pass


def pipeline_transform(renameCol, renameIdx, setIndexName):
    pass


def pipeline_to_json(jsonParams):
    pass


if __name__ == "__main__":
    # setting parameters for loading data
    attrs = {'border': 1, 'cellpadding': 5, 'cellspacing': 0}
    params = {
        'header': 0,
        'attrs': attrs
    }

    for data in urlData:
        question = data['question']
        fp = "../../app/public/data/%s.json" % (data['filename'])
        params['url'] = data['url']

        load = Loader()
        load.setParams(params)
        data = load.loadHtml().data

        # ------------------ #
        # Transform the data #
        # ------------------ #

        # setting parameters
        jsonFp = './states.json'
        colName = 'State:'  # column name to filter data

        # instantiate transformer
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
        transform.renameCol(0, 'State')

        # set index
        transform.setIndex('StateAbbr')

        # convert dictionary to json
        jsonParams = {'orient': 'index'}
        tData = transform.toJson(jsonParams)

        jsonData = {
            'question': question,
            'data': tData
        }

        # print('dumping to %s' % fp)
        with open(fp, 'w') as file:
            json.dump(jsonData, file)
