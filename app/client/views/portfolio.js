var portfolio = [
  {
    "title": "Behavioral Risk Factor Surveillance System",
    "caption": "Visualizing the Center for Disease Control\'s public data sets on health risk behaviors.",
    "template": "brfss",
    "route": "behavioral-risk",
    "linkOut": "http://apps.nccd.cdc.gov/brfss/",
    "tags": [
      "public health",
      "data visualization",
      "d3",
      "javascript",
      "python"
    ],
  },
  {
    "title": "SDG Handbook",
    "caption": "A guide or getting started with the Sustainable Development Goals.",
    "template": "",
    "route": "",
    "linkOut": "http://sdghandbook.sumit.io",
    "tags": [
      "sustainable development",
      "meteor.js",
      "javascript",
      "united nations",
      "html5"
    ],
  },
  {
    "title": "SDSN Forum",
    "caption": "A community management solution for the Sustinable Development Solutions Network.",
    "template": "",
    "route": "",
    "linkOut": "http://sdsn.sumit.io",
    "tags": [
      "sustainable development",
      "meteor.js",
      "javascript",
      "united nations",
      "html5",
    ],
  },
  {
    "title": "Text-mining UNDAF Reports",
    "caption": "A natural language processing project with the UN Development Operations Coordination Office.",
    "template": "undaf",
    "route": "undaf-project",
    "linkOut": "",
    "tags": [
      "topic modeling",
      "latent dirichlet allocation",
      "python",
      "data visualization",
      "d3",
      "nvd3",
      "meteor.js",
      "javascript"
    ],
  },
  {
    "title": "GensimLite",
    "caption": "A lightweight API that wraps around Gensim, the popular topic modeling Python package.",
    "template": "",
    "route": "",
    "linkOut": "https://github.com/cosmicBboy/gensimLite",
    "tags": [
      "topic modeling",
      "python",
      "latent dirichlet allocation"
    ],
  },
  {
    "title": "Urbanscape",
    "caption": "An agent-based model for simulating the socioeconomic dynamics of food consumption in an urban context.",
    "template": "",
    "route": "",
    "linkOut": "https://github.com/cosmicBboy/Urbanscape",
    "tags": [
      "public health",
      "obesity",
      "agent-based model",
      "simulation",
      "python"
    ],
  },
  {
    "title": "Undercovers",
    "caption": "A prototype for an anonymous sexual health mobile app for teenagers.",
    "template": "",
    "route": "",
    "linkOut": "https://justjken.typeform.com/to/YEhuu5",
    "tags": [
      "public health",
      "sexual health",
      "ux design",
      "ui design",
      "typeform",
    ],
  },
  {
    "title": "Justice for the Mentally Ill",
    "caption": "An infographic illuminating some of the mental health issues that inmates face in the current criminal justice system.",
    "template": "",
    "route": "",
    "linkOut": "http://cosmicbboy.tumblr.com/post/85136532643/justice-for-the-mentally-ill",
    "tags": [
      "public health",
      "mental health",
      "criminal justice",
      "infographic",
      "data visualization",
    ],
  },
  {
    "title": "Scolarity",
    "caption": "A concept prototype for a social platform that enables teachers and volunteers to share knowledge about afterschool programs",
    "template": "",
    "route": "",
    "linkOut": "https://www.youtube.com/watch?v=5G0VhqH1LX8",
    "tags": [
      "public health",
      "education",
      "ux design",
      "ui design",
      "video media",
    ],
  },
];

Template.portfolio.helpers({
  portfolioItems: function () {
    return portfolio;
  },
  anchorLink: function () {
    if (this.route) {
      return "portfolio/" + this.route;
    } else {
      return this.linkOut;
    }
  },
  targetBlank: function () {
    var route = this.route;
    var linkOut = this.linkOut;

    if (!route && linkOut) {
      return true;
    } else {
      return false;
    }
  }
});