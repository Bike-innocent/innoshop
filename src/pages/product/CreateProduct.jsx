// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axiosInstance';

// import CreateProductImage from './CreateProductImage';


// const CreateProduct = () => {
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colours, setColours] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [images, setImages] = useState([]);
  

//   const [formData, setFormData] = useState({
//     name: '',
  
//     category_id: '',
//     brand_id: '',
//     colour_id: '',
//     size_id: '',
//     supplier_id: '',
//     description: '',
//     price: '',
//     stock_quantity: '',
//   });

//   // Fetch dependencies separately
//   useEffect(() => {
//     fetchCategories();
//     fetchBrands();
//     fetchColours();
//     fetchSizes();
//     fetchSuppliers();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axiosInstance.get('/product-categories');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const fetchBrands = async () => {
//     try {
//       const response = await axiosInstance.get('/brands');
//       setBrands(response.data);
//     } catch (error) {
//       console.error('Error fetching brands:', error);
//     }
//   };

//   const fetchColours = async () => {
//     try {
//       const response = await axiosInstance.get('/colours');
//       setColours(response.data);
//     } catch (error) {
//       console.error('Error fetching colours:', error);
//     }
//   };

//   const fetchSizes = async () => {
//     try {
//       const response = await axiosInstance.get('/sizes');
//       setSizes(response.data);
//     } catch (error) {
//       console.error('Error fetching sizes:', error);
//     }
//   };

//   const fetchSuppliers = async () => {
//     try {
//       const response = await axiosInstance.get('/suppliers');
//       setSuppliers(response.data);
//     } catch (error) {
//       console.error('Error fetching suppliers:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Create FormData object to handle form submission with files
//     const data = new FormData();
  
//     // Append text fields to FormData
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });
  
//     // Append images to FormData
//     images.forEach((image, index) => {
//       data.append(`images[]`, image.file); // use `images[]` as the key for array
//     });
  
//     try {
//       // Send a POST request with FormData
//       await axiosInstance.post('/products', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Product created successfully');
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };




import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import CreateProductImage from './CreateProductImage';

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [images, setImages] = useState([]);
  const [primaryIndex, setPrimaryIndex] = useState(null); // Track primary image index

  const [formData, setFormData] = useState({
    name: '',
    category_id: '',
    brand_id: '',
    colour_id: '',
    size_id: '',
    supplier_id: '',
    description: '',
    price: '',
    stock_quantity: '',
  });

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchColours();
    fetchSizes();
    fetchSuppliers();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/product-categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axiosInstance.get('/brands');
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchColours = async () => {
    try {
      const response = await axiosInstance.get('/colours');
      setColours(response.data);
    } catch (error) {
      console.error('Error fetching colours:', error);
    }
  };

  const fetchSizes = async () => {
    try {
      const response = await axiosInstance.get('/sizes');
      setSizes(response.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };

  const fetchSuppliers = async () => {
    try {
      const response = await axiosInstance.get('/suppliers');
      setSuppliers(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]);
  });

  // Append images to FormData
  images.forEach((image) => {
    data.append('images[]', image.file);
  });

  // Append primary image index to FormData
  if (primaryIndex !== null) {
    data.append('primary_image_index', primaryIndex);
  } else {
    alert('Please select a primary image.');
    return;
  }

  try {
    await axiosInstance.post('/products', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('Product created successfully');
  } catch (error) {
    console.error('Error creating product:', error);
  }
};

  
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Brand:</label>
        <select
          name="brand_id"
          value={formData.brand_id}
          onChange={handleChange}
          className="border rounded w-full p-2"
        >
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Colour:</label>
        <select
          name="colour_id"
          value={formData.colour_id}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Colour</option>
          {colours.map((colour) => (
            <option key={colour.id} value={colour.id}>
              {colour.name} ({colour.hex_code})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Size:</label>
        <select
          name="size_id"
          value={formData.size_id}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Supplier:</label>
        <select
          name="supplier_id"
          value={formData.supplier_id}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Supplier</option>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded w-full p-2"
          placeholder="Product Description"
          required
        ></textarea>
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
          className="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <label>Stock Quantity:</label>
        <input
          type="number"
          name="stock_quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
          placeholder="Stock Quantity"
          className="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <CreateProductImage images={images} setImages={setImages} setPrimaryIndex={setPrimaryIndex} />
      </div>



      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;









































