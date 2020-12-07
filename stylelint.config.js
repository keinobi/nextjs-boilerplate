module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'custom-property-empty-line-before': null,
    'declaration-block-trailing-semicolon': null,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'order/properties-order': [[], { severity: 'warning' }],
    'plugin/rational-order': [true, {
      'border-in-box-model': true,
      'empty-line-between-groups': true
    }]
  }
}
