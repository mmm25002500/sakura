import intl from '@/locales'

export interface Option {
  namespace: string
  public: boolean
  title: string
  desc?: string
  type: string
  default: any
  binds?: { [key: string]: any }
  depends?: (state: any) => boolean
}
export interface Options {
  [tag: string]: {
    title: string
    desc?: string
    icon: string
    options: Array<Option>
  }
}

const options: Options = {
  basic: {
    title: 'Basic',
    desc: 'The basic options',
    icon: 'fas fa-address-card',
    options: [
      // basic.site.title
      {
        namespace: 'basic.site.title',
        public: true,
        title: intl.formatMessage({
          id: 'options.basic.site.title.title',
          defaultMessage: 'Site title',
        }),
        desc: intl.formatMessage({
          id: 'options.basic.site.title.desc',
          defaultMessage: 'The site title',
        }),
        type: 'string',
        default: 'Theme Sakura',
      },
      // basic.site.logo
      {
        namespace: 'basic.site.logo',
        public: true,
        title: intl.formatMessage({
          id: 'options.basic.site.logo.title',
          defaultMessage: 'Site logo',
        }),
        desc: intl.formatMessage({
          id: 'options.basic.site.logo.desc',
          defaultMessage: "The site's Logo image, will display on navigation bar.",
        }),
        type: 'mediaPicker',
        default: [{ id: 0, url: 'https://v3.vuejs.org/logo.png' }],
        binds: {
          title: intl.formatMessage({
            id: 'options.basic.site.logo.binds.title',
            defaultMessage: 'Select image for site logo.',
          }),
          button: intl.formatMessage({
            id: 'options.basic.site.logo.binds.button',
            defaultMessage: 'Use this image',
          }),
          type: 'image',
          multiple: false,
        },
      },
    ],
  },
  social: {
    title: 'Social',
    icon: 'fas fa-users',
    options: [
      {
        namespace: 'social.github',
        public: true,
        title: 'Github username',
        desc: 'Your <a href="https://github.com" target="_blank">Github</a> username',
        type: 'string',
        default: '',
      },
    ],
  },
  thirdParty: {
    title: 'Third party services',
    icon: 'fas fa-bezier-curve',
    options: [
      // thirdParty.reCaptcha.enable
      {
        namespace: 'thirdParty.reCaptcha.enable',
        public: true,
        title: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.enable.title',
          defaultMessage: 'Enable reCAPTCHA',
        }),
        desc: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.enable.desc',
          defaultMessage: 'Use reCAPTCHA for anti-spam check.',
        }),
        type: 'switcher',
        default: false,
        binds: {
          positiveLabel: intl.formatMessage({
            id: 'options.thirdParty.reCaptcha.enable.positiveLabel',
            defaultMessage: 'Enabled',
          }),
          negativeLabel: intl.formatMessage({
            id: 'options.thirdParty.reCaptcha.enable.negativeLabel',
            defaultMessage: 'Disabled',
          }),
          disabled: false,
        },
      },
      // thirdParty.reCaptcha.version
      {
        namespace: 'thirdParty.reCaptcha.version',
        public: true,
        title: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.version.title',
          defaultMessage: 'reCAPTCHA version',
        }),
        desc: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.version.desc',
          defaultMessage:
            'Register your reCAPTCHA app \'<a href="https://www.google.com/recaptcha/about/" target="_blank">here</a>\', and choose a version.',
        }),
        type: 'choose',
        default: NaN,
        binds: {
          options: [
            {
              label: intl.formatMessage({
                id: 'options.thirdParty.reCaptcha.version.label.v3',
                defaultMessage: 'reCAPTCHA version 3',
              }),
              disabled: false,
            },
            {
              label: intl.formatMessage({
                id: 'options.thirdParty.reCaptcha.version.label.v2',
                defaultMessage: 'reCAPTCHA version 2',
              }),
              disabled: false,
            },
          ],
        },
        depends: (state) => {
          return state.value['thirdParty.reCaptcha.enable']
        },
      },
      // thirdParty.reCaptcha.siteKey
      {
        namespace: 'thirdParty.reCaptcha.siteKey',
        public: true,
        title: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.siteKey.title',
          defaultMessage: 'reCAPTCHA site key',
        }),
        type: 'string',
        default: '',
        depends: (state) => {
          return state.value['thirdParty.reCaptcha.enable']
        },
      },
      // thirdParty.reCaptcha.secretKey
      {
        namespace: 'thirdParty.reCaptcha.secretKey',
        public: false,
        title: intl.formatMessage({
          id: 'options.thirdParty.reCaptcha.secretKey.title',
          defaultMessage: 'reCAPTCHA secret key',
        }),
        type: 'string',
        default: '',
        depends: (state) => {
          return state.value['thirdParty.reCaptcha.enable']
        },
      },
    ],
  },
  other: {
    title: 'Other',
    icon: 'fas fa-umbrella',
    options: [
      {
        namespace: 'other.hello',
        public: true,
        title: 'Hello world',
        type: 'string',
        default: 'world',
      },
    ],
  },
  demos: {
    title: 'Demo',
    icon: 'fas fa-democrat',
    desc: '<i class="fas fa-exclamation-triangle"></i> Just components demo, comment this section in prod mode!',
    options: [
      {
        namespace: 'demo.string',
        public: true,
        title: 'String',
        desc: 'One line string input.',
        type: 'string',
        default: 'Hello world!',
      },
      {
        namespace: 'demo.longString',
        public: true,
        title: 'Long string',
        desc: 'Textarea for long string input.',
        type: 'longString',
        default: `"It is the unknown we fear when we look upon death and darkness, nothing more."\n-- Albus Dumbledore`,
      },
      {
        namespace: 'demo.switcher',
        public: true,
        title: 'Switcher',
        type: 'switcher',
        desc: 'True/False switcher.',
        default: true,
        binds: {
          positiveLabel: 'current on',
          negativeLabel: 'current off',
          disabled: false,
        },
      },
      {
        namespace: 'demo.choose',
        public: true,
        title: 'Choose',
        desc: 'Choose one from options.',
        type: 'choose',
        default: NaN,
        binds: {
          options: [
            { label: 'op 1', disabled: false },
            { label: 'op 2', disabled: false },
            { label: 'op 3', disabled: false },
            { label: 'op 4', disabled: true },
          ],
        },
      },
      {
        namespace: 'demo.selection',
        public: true,
        title: 'Selection',
        desc: 'Selection multiple items from options. max: {0: no limit, >0: limit}',
        type: 'selection',
        default: [true, false, true],
        binds: {
          options: [
            { label: 'op 1', disabled: false },
            { label: 'op 2', disabled: false },
            { label: 'op 3', disabled: false },
            { label: 'op 4', disabled: true },
          ],
          max: 2,
        },
      },
      {
        namespace: 'demo.mediaPicker',
        public: true,
        title: 'Media picker',
        desc: '<code>type="image"|"video"|"audio?"</code>, the object must include id, id=0 for remote media.',
        type: 'mediaPicker',
        default: [
          {
            id: 0,
            url: 'https://view.moezx.cc/images/2021/07/02/d5ab73174d18652d890e2f4d1b9bef8f.gif',
          },
          {
            id: 0,
            url: 'https://view.moezx.cc/images/2021/07/02/a90553bf5b67770e87a89b2ce204eaa7.gif',
          },
        ],
        binds: {
          title: 'Select Media',
          button: 'Use this media',
          type: 'image',
          multiple: true,
        },
      },
    ],
  },
}

export default options