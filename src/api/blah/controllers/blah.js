"use strict";

/**
 * blah controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blah.blah", ({ strapi }) => ({
  async custom(ctx) {
    // default core controller for this content-type
    const blahFindMany = await super.find({
      ...ctx,
      // setting a custom ctx.query to show the difference
      query: { fields: ["testAltString"] },
    });

    // calling an external controller from another content-type
    const testFindMany = await strapi.controllers["api::test.test"].find({
      ...ctx,
      // again, setting a custom ctx.query to show the difference
      query: { fields: ["testString"] },
    });

    return {
      blahFindMany,
      testFindMany,
    };
  },
}));
