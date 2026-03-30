import type { Schema, Struct } from '@strapi/strapi';

export interface MenuItemMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_item_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    Label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu-item.menu-item': MenuItemMenuItem;
    }
  }
}
