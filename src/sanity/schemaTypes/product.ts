import { Rule as RuleType } from '@sanity/types';

const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        },
        // {
        //     name: 'backImages',
        //     title: 'Background Images',
        //     type: 'image'
        // },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            title: 'Description of a Product',
            type: 'text'
        },
        {
            name: 'description1',
            title: 'Description1 of a Product',
            type: 'text'
        },
       
        {
            name: 'price',
            title: 'Price of Product',
            type: 'number'
        },
        {
            name: 'otherprice',
            title: 'Original Price',
            type: 'number'
        },
        {
            name: 'sku',
            title: 'SKU',
            type: 'string'
        },

        {
            name: 'stock',
            title: 'In Stock',
            type: 'number'
        },

        // {
        //     name:'price_id',
        //     title:'Stripe Price ID',
        //     type:'string'
        // },
        
        {
            name: 'rating',
            title: 'Rating',
            type: 'object',
            fields: [
              {
                name: 'average',
                title: 'Average Rating',
                type: 'number',
                description: 'The average rating for the product (out of 5).',
                validation: (Rule:RuleType) => Rule.min(0).max(5),
              },
              {
                name: 'count',
                title: 'Number of Ratings',
                type: 'number',
                description: 'The total number of ratings received.',
                validation: (Rule:RuleType) => Rule.min(0),
              },
            ],
          },
    ]
}

export default product;