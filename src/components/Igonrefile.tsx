import { Text } from '@chakra-ui/react';
import { ServiceIcon } from 'icons';
import React, { useEffect, useRef } from 'react';
import { FILTER_TYPE_LABEL, OPERATOR_LABEL } from '../../../constant';

import useServiceList from '../../../create-or-update/filter/service/useServiceList';
import { OperatorTypes } from '../../../types/enums';
import { safeEncodeUriComponent } from '../../../utils';
import { Loader } from './Loader';
import Wrapper from './Wrapper';
import { focusCard } from 'core';
import { ActiveWorkflowTarget } from './ActiveWorkflowTarget';
import { BE_FieldType } from '../../../types';

interface ServiceConditionsProps {
  services?: BE_FieldType;
}

export const ServiceConditions: React.FC<ServiceConditionsProps> = ({ services }) => {
  if (!services) return null;
  const flexRef = useRef(null);

  const { data, isLoading } = useServiceList();

  const { isactionTrigger, styleActionOnTarget, targetAction } =
    ActiveWorkflowTarget('#Service%20Name');

  const serviceData = data?.find(service => service.id === services?.fields.value);

  useEffect(() => {
    if (flexRef.current && targetAction === '#Service%20Name') {
      focusCard(flexRef.current);
    }
  }, [isactionTrigger]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Wrapper
      id={safeEncodeUriComponent(FILTER_TYPE_LABEL.service)}
      border={styleActionOnTarget}
      ref={flexRef}
    >
      <ServiceIcon width={24} height={24} />
      <Text variant="h1" as="h1">
        <strong> Service </strong>
        <span>{OPERATOR_LABEL[services?.type.split('service_')[1] as OperatorTypes]}</span>
      </Text>
      <Text fontSize="2xl">{serviceData?.name ?? services?.fields.value}</Text>
    </Wrapper>
  );
};
