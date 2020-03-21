import React from 'react';
import {View} from 'react-native';
import * as _ from 'lodash';
import {BoxShadow} from 'react-native-shadow';
import {partitionByKeys} from '../../helpers';

interface IOffset {
  width: number;
  height: number;
}

interface IShadow {
  color: string;
  offset: IOffset;
  radius: number;
  opacity: number;
}

const innerStyleKeys = [
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingHorizontal',
  'paddingVertical',
  'backgroundColor',
  'flexDirection',
  'justifyContent',
  'alignItems',
  'minHeight',
  'minHeight',
];

const MultipleShadowsView = ({level, shadows, children, style, ...props}) => {
  const _level: number = level || 0;
    const shadow: IShadow = _.head(shadows) || {};
    
  const [innerStyle, outerStyle] = style
    ? partitionByKeys(innerStyleKeys, style)
        : [ {}, {} ];
    console.log(shadow.offset.width);
  return (
    <BoxShadow
      {...props}
      setting={{
        width: 40,
        height: 40,
        color: '#ff0000',
        opacity: shadow.opacity,
        x: 10,
        y: 10,
      }}
      style={{
        width: 20,
        marginLeft: 10,
        ...(_level === 0 ? outerStyle : {}),
        ...(shadows.length === 1 ? innerStyle : {}),
      }}>
      {shadows.length === 1 ? (
        children
      ) : (
        <MultipleShadowsView
          level={_level + 1}
          shadows={_.tail(shadows)}
          style={style}>
          {children}
        </MultipleShadowsView>
      )}
    </BoxShadow>
  );
};

export default MultipleShadowsView;
