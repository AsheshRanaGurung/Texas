 // serviceFilter: object().when('filterType', {
  //   is: (filterGroup: FilterTypeOption[]) =>
  //     filterGroup.map(f => f.value).includes(FilterTypes.SERVICE),
  //   then: object().shape({
  //     filters: object().shape({
  //       operator: object().shape({
  //         label: string().required('Operator label is required!'),
  //         value: string()
  //           .oneOf(Object.values(OperatorTypes), 'Invalid operator value')
  //           .required('Operator value is required!'),
  //       }),
  //       entity: object()
  //         .nullable(true)
  //         .test('required', 'Service is required', function (value) {
  //           return dropdownAvailableOptions.includes(this.parent.operator.value) ? !!value : true;
  //         }),
  //       value: string().test('required', 'Phrase is required', function (value) {
  //         return !dropdownAvailableOptions.includes(this.parent.operator.value) ? !!value : true;
  //       }),
  //     }),
  //   }),
  //   otherwise: object().strip(),
  // }),
  // alertSourceFilter: object().when('filterType', {
  //   is: (filterGroup: FilterTypeOption[]) => {
  //     return filterGroup.map(f => f.value).includes(FilterTypes.ALERT_SOURCE);
  //   },
  //   then: object().shape({
  //     filters: object().shape({
  //       operator: object().shape({
  //         label: string().required('Operator label is required!'),
  //         value: string()
  //           .oneOf(Object.values(OperatorTypes), 'Invalid operator value')
  //           .required('Operator value is required!'),
  //       }),
  //       entity: object().test('required', 'Alert Source is required', function (value) {
  //         return dropdownAvailableOptions.includes(this.parent.operator.value) ? !!value : true;
  //       }),
  //       value: string().test('required', 'Phrase is required', function (value) {
  //         return !dropdownAvailableOptions.includes(this.parent.operator.value) ? !!value : true;
  //       }),
  //     }),
  //   }),
  //   otherwise: object().strip(),
  // }),
  // priorityFilter: object().when('filterType', {
  //   is: (filterGroup: FilterTypeOption[]) => {
  //     return filterGroup.map(f => f.value).includes(FilterTypes.PRIORITY);
  //   },
  //   then: object().shape({
  //     filters: object().shape({
  //       operator: object().shape({
  //         label: string().required('Operator label is required!'),
  //         value: string()
  //           .oneOf(Object.values(OperatorTypes), 'Invalid operator value')
  //           .required('Operator value is required!'),
  //       }),
  //       entity: object().test('required', 'Priority is required', function (value) {
  //         return dropdownAvailableOptions.includes(this.parent.operator.value) ? !!value : true;
  //       }),
  //     }),
  //   }),
  //   otherwise: object().strip(),
  // }),
  // tagFilter: object().when('filterType', {
  //   is: (filterGroup: FilterTypeOption[]) => {
  //     return filterGroup.map(f => f.value).includes(FilterTypes.TAGS);
  //   },
  //   then: object().shape({
  //     filters: array().of(
  //       object().shape({
  //         operator: object().shape({
  //           label: string().required('Operator label is required!'),
  //           value: string()
  //             .oneOf(Object.values(OperatorTypes), 'Invalid operator value')
  //             .required('Operator value is required!'),
  //         }),
  //         logicalOperator: object().shape({
  //           label: string().required('Logical Operator label is required!'),
  //           value: string().oneOf(
  //             Object.values(LogicalOperatorTypes),
  //             'Invalid Logical Operator value',
  //           ),
  //         }),
  //         tag: object().shape({
  //           key: object()
  //             .shape({
  //               label: string().required('Tag key is required!'),
  //               value: string().required('Tag key is required!'),
  //             })
  //             .required('Tag key is required!'),
  //           value: object().nullable(true).required('Tag value is required!'),
  //         }),
  //       }),
  //     ),
  //   }),
  //   otherwise: object().strip(),
  // }),

  //why is not my commit push not showinf in githu
