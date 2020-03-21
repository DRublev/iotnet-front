import React from 'react';
import {View} from 'react-native';
import {partionByKeys} from '../../helpers';

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

export const MultipleShadowsView = (
  level,
  shadows: Array<IShadow>,
  children: any,
  style: Object,
  ...props
) => {
  const _level: number = level || 0;
  const shadow = shadows.shift();
  const [innerStyle, outerStyle] = style
    ? partionByKeys(innerStyleKeys, style)
    : [{}, {}];

  return (
    <View
      {...props}
      style={{
        shadowColor: shadow.color,
        shadowOffset: shadow.offset,
        shadowOpacity: shadow.opacity,
        shadowRadius: shadow.radius,
        ...(level === 0 ? outerStyle : {}),
        ...(shadows.length === 1 ? innerStyle : {}),
      }}>
      {shadows.length === 1 ? (
        children
      ) : (
        <MultipleShadowsView level={_level + 1} shadows={shadows} style={style}>
          {children}
        </MultipleShadowsView>
      )}
    </View>
  );
};
