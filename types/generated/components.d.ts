import type { Schema, Attribute } from '@strapi/strapi';

export interface FeatureGroupFeatureGroups extends Schema.Component {
  collectionName: 'components_feature_groups_feature_groups';
  info: {
    displayName: 'featureGroup';
    description: '';
  };
  attributes: {
    feature: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'feature-group.feature-groups': FeatureGroupFeatureGroups;
    }
  }
}
