import { createServer, Model } from "miragejs";
export function userServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      users: Model,
      products: Model,
    },
    seeds(server) {
      // Data for Users
      server.create("user", {
        email: "john@gmail.com",
        name: "John Doe",
        password: "m38rmF$",
        phone: "1-570-236-7033",
      });

      server.create("user", {
        email: "morrison@gmail.com",
        username: "David Morrison",
        password: "83r5^_",
        phone: "1-570-236-7033",
      });

      server.create("user", {
        email: "kevin@gmail.com",
        name: "Kevin Ryan",
        password: "kev02937@",
        phone: "1-567-094-1345",
      });

      server.create("user", {
        email: "don@gmail.com",
        name: "Done Romer",
        password: "ewedon",
        phone: "1-765-789-6734",
      });

      server.create("user", {
        email: "derek@gmail.com",
        name: "Derek Powell",
        password: "jklg*_56",
        phone: "1-956-001-1945",
      });

      server.create("user", {
        email: "david_r@gmail.com",
        name: "David Russell",
        password: "3478*#54",
        phone: "1-678-345-9856",
      });

      server.create("user", {
        email: "miriam@gmail.com",
        name: "Mirian Snyder",
        password: "f238&@*$",
        phone: "1-123-943-0563",
      });

      server.create("user", {
        email: "william@gmail.com",
        name: "Willian Hopkins",
        password: "William56$hj",
        phone: "1-478-001-0890",
      });

      server.create("user", {
        email: "kate@gmail.com",
        name: "Kate Hale",
        password: "kfejk@*_",
        phone: "1-678-456-1934",
      });

      server.create("user", {
        email: "jimmie@gmail.com",
        name: "Jimmie Klein",
        password: "klein*#%*",
        phone: "1-104-001-4567",
      });

      //Data for Products

      //#1
      server.create("product", {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      });

      //#2
      server.create("product", {
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      });

      //#3
      server.create("product", {
        name: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      });

      //#4
      server.create("product", {
        name: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      });

      //#5
      server.create("product", {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      });

      //#6
      server.create("product", {
        name: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      });

      //#7
      server.create("product", {
        name: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      });

      //#8
      server.create("product", {
        name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      });

      //#9
      server.create("product", {
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      });

      //#10
      server.create("product", {
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      });
    },

    routes() {
      this.namespace = "api/";

      //for users
      this.get("users/", (schema, request) => {
        return schema.users.all();
      });
      this.get("users/:id", (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id);
      });
      this.post("users/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
      this.patch("users/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let user = schema.users.find(id);
        return user.update(newAttrs);
      });
      this.delete("users/:id", (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id).destroy();
      });

      // For products
      this.get("products/", (schema, request) => {
        return schema.products.all();
      });
      this.get("products/:id", (schema, request) => {
        let id = request.params.id;
        return schema.products.find(id);
      });
      this.post("products/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.products.create(attrs);
      });
      this.patch("products/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let user = schema.products.find(id);
        return user.update(newAttrs);
      });
      this.delete("products/:id", (schema, request) => {
        let id = request.params.id;
        return schema.products.find(id).destroy();
      });
    },
  });
  return server;
}
