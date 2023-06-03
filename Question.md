## Questions

**Question 1:** What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

**Answer**: In MongoDB, building a model that includes an interface and a schema helps in defining the structure of a collection by laying out the fields, data types, and validation requirements. It promises data consistency, enables data validation, boosts readability, increases development efficiency, and keeps the database's structure and flexibility in balance.


**Question 2:** Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

**Answer**: When querying a collection in MongoDB, field filtering enables you to specify which fields to include or exclude in the documents that are returned. You can specify the fields you want to include or exclude using the projection parameter.

Set the projection parameter's values to 1 to include a particular field. In the returned documents, "field1" and "field2" will be the only entries.

Set a field's value in the projection parameter to 0 to exclude it. For example, "field3: 0, field4: 0" will remove "field3" and "field4" from the documents that are returned.

By lowering network overhead and transferring only the necessary data, field filtering enhances performance. It enables precise output control by optimizing query results in accordance with predetermined needs. Additionally

**Question 3:** What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

**Answer**: Custom methods that are defined on specific document instances make up instance methods in MongoDB models. Specific documents produced using the model may access and call these methods.

An instance method's function is to carry out operations or offer functionality unique to a single document. It enables you to incorporate unique logic or behavior directly into the document.

For instance, you could define the instance method generateAuthToken() in a MongoDB model that represents a user document. An authentication token that is specific to that particular user document may be generated and returned by this method. The document's data can be accessed by the instance method, which can then use the data to perform any necessary calculations or operations.

**Question 4:** How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

**Answer**: Comparison operators in MongoDB queries allow for comparing values and performing conditional operations. Here are examples of how to use the comparison operators "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to):

1. "$ne" (not equal):
   Query to find documents where the "status" field is not equal to "completed":
   `{ status: { $ne: "completed" } }`

2. "$gt" (greater than):
   Query to find documents where the "age" field is greater than 25:
   `{ age: { $gt: 25 } }`

3. "$lt" (less than):
   Query to find documents where the "price" field is less than 50:
   `{ price: { $lt: 50 } }`

4. "$gte" (greater than or equal to):
   Query to find documents where the "quantity" field is greater than or equal to 100:
   `{ quantity: { $gte: 100 } }`

5. "$lte" (less than or equal to):
   Query to find documents where the "rating" field is less than or equal to 4.5:
   `{ rating: { $lte: 4.5 } }`

These operators can be used in combination with other query operators and can be applied to various data types such as strings, numbers, dates, etc. They enable you to perform conditional filtering and retrieve documents that meet specific comparison criteria.

**Question 5:** What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

**Answer**: The "$in" and "$nin" operators in MongoDB are used in queries to match or exclude values from an array of values.

1. The "$in" operator matches documents where the value of a specified field matches any value in the supplied array. For instance:
The expression "status: $in: ["completed," "pending"]" matches records where the "status" field contains the words "completed" or "pending."

2. The "$nin" operator eliminates documents whose values in a given field coincide with any values in the supplied array. For instance:
'age:' excludes documents where the "age" field contains the values 18, 19, or 20.

More complex queries can be executed by combining these operators with additional query conditions. 


