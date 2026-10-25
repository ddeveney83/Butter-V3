import { test } from "node:test";
import assert from "node:assert/strict";
import { serviceSchema } from "../lib/service-schema";
import { serviceDetails } from "../content/service-details";

test("service evidence is withheld until both publication and canonical identity are confirmed", () => {
  const service = serviceDetails[0];
  assert.deepEqual(serviceSchema(service, "draft", "https://example.org"), []);
  assert.deepEqual(
    serviceSchema(service, "approved", "https://example.org"),
    [],
  );
  assert.deepEqual(serviceSchema(service, "published", ""), []);
  const schema = serviceSchema(service, "published", "https://example.org");
  assert.equal(
    schema[0].url,
    "https://example.org/services/elearning-design-development",
  );
  assert.deepEqual(
    schema[1].itemListElement?.map((item) => item.position),
    [1, 2, 3],
  );
  assert.equal(JSON.stringify(schema).includes("aggregateRating"), false);
});
