


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axiosInstance';
// import EditProductImage from './EditProductImage';

// const EditProduct = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     stock_quantity: '',
//     category_id: '',
//     brand_id: '',
//     colour_id: '',
//     size_id: '',
//     supplier_id: '',
//   });

//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colours, setColours] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [images, setImages] = useState([]);
//   const [newImages, setNewImages] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [processing, setProcessing] = useState(false);

//   // Fetch product details and related data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productResponse = await axiosInstance.get(`/products/${slug}`);
//         const productData = productResponse.data;

//         setFormData({
//           name: productData.name,
//           description: productData.description,
//           price: productData.price,
//           stock_quantity: productData.stock_quantity,
//           category_id: productData.category_id || '',
//           brand_id: productData.brand_id || '',
//           colour_id: productData.colour_id || '',
//           size_id: productData.size_id || '',
//           supplier_id: productData.supplier_id || '',
//         });

//         setImages(productData.images || []); // Load existing images

//         const [categoriesRes, brandsRes, coloursRes, sizesRes, suppliersRes] = await Promise.all([
//           axiosInstance.get('/product-categories'),
//           axiosInstance.get('/brands'),
//           axiosInstance.get('/colours'),
//           axiosInstance.get('/sizes'),
//           axiosInstance.get('/suppliers'),
//         ]);

//         setCategories(categoriesRes.data);
//         setBrands(brandsRes.data);
//         setColours(coloursRes.data);
//         setSizes(sizesRes.data);
//         setSuppliers(suppliersRes.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setErrors({ general: 'Failed to load product details or related data.' });
//       }
//     };

//     fetchData();
//   }, [slug]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setNewImages([...newImages, ...e.target.files]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setProcessing(true);
//     setErrors({});

//     const formDataToSend = new FormData();
//     formDataToSend.append('_method', 'PUT');
//     Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

//     newImages.forEach((image, index) => formDataToSend.append(`new_images[${index}]`, image));

//     try {
//       await axiosInstance.post(`/products/${slug}`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       navigate('/dashboard/product-list', { state: { success: 'Product updated successfully.' } });
//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         setErrors(error.response.data.errors);
//       } else {
//         setErrors({ general: 'Failed to update the product. Please try again.' });
//       }
//     } finally {
//       setProcessing(false);
//     }
//   };


//   return (
//     <section className="px-4 lg:px-16 ">
//       <div className="max-w-4xl mx-auto bg-white p-2  rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-8 text-center">Edit Product</h2>

//         {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}

//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Product Name */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Description */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               ></textarea>
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
//               <select
//                 name="category_id"
//                 value={formData.category_id}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Category</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Brand */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
//               <select
//                 name="brand_id"
//                 value={formData.brand_id}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Brand</option>
//                 {brands.map((brand) => (
//                   <option key={brand.id} value={brand.id}>
//                     {brand.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Color Dropdown */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
//               <select
//                 name="colour_id"
//                 value={formData.colour_id} // Correct property name
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Color</option>
//                 {colours.map((colour) => (
//                   <option key={colour.id} value={colour.id}>
//                     {colour.name}
//                   </option>
//                 ))}
//               </select>
//             </div>


//             {/* Size */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Size</label>
//               <select
//                 name="size_id"
//                 value={formData.size_id}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Size</option>
//                 {sizes.map((size) => (
//                   <option key={size.id} value={size.id}>
//                     {size.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Supplier */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Supplier</label>
//               <select
//                 name="supplier_id"
//                 value={formData.supplier_id}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Supplier</option>
//                 {suppliers.map((supplier) => (
//                   <option key={supplier.id} value={supplier.id}>
//                     {supplier.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Price */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Stock Quantity */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Stock Quantity</label>
//               <input
//                 type="number"
//                 name="stock_quantity"
//                 value={formData.stock_quantity}
//                 onChange={handleInputChange}
//                 required
//                 className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Product Image */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Product Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="block w-full text-gray-600"
//               />
//             </div>
//           </div>

//           <div>
//             <EditProductImage images={images} setImages={setImages} />
//           </div>


//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={processing}
//             className="bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600"
//           >
//             {processing ? 'Updating...' : 'Update Product'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );

// };

// export default EditProduct;





















































import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import EditProductImage from './EditProductImage';

const EditProduct = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock_quantity: '',
    category_id: '',
    brand_id: '',
    colour_id: '',
    size_id: '',
    supplier_id: '',
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [primaryIndex, setPrimaryIndex] = useState(null); // Track primary image index
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  // Fetch product details and related data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axiosInstance.get(`/products/${slug}`);
        const productData = productResponse.data;

        setFormData({
          name: productData.name,
          description: productData.description,
          price: productData.price,
          stock_quantity: productData.stock_quantity,
          category_id: productData.category_id || '',
          brand_id: productData.brand_id || '',
          colour_id: productData.colour_id || '',
          size_id: productData.size_id || '',
          supplier_id: productData.supplier_id || '',
        });

        setImages(productData.images || []);
        setPrimaryIndex(productData.primary_image_index || 0);

        const [categoriesRes, brandsRes, coloursRes, sizesRes, suppliersRes] = await Promise.all([
          axiosInstance.get('/product-categories'),
          axiosInstance.get('/brands'),
          axiosInstance.get('/colours'),
          axiosInstance.get('/sizes'),
          axiosInstance.get('/suppliers'),
        ]);

        setCategories(categoriesRes.data);
        setBrands(brandsRes.data);
        setColours(coloursRes.data);
        setSizes(sizesRes.data);
        setSuppliers(suppliersRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrors({ general: 'Failed to load product details or related data.' });
      }
    };

    fetchData();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const newImageObjects = uploadedFiles.map((file) => ({
      id: `temp-${Date.now()}-${file.name}`, // Temporary ID for frontend
      file,
      image_path: URL.createObjectURL(file),
    }));
    setNewImages([...newImages, ...uploadedFiles]);
    setImages([...images, ...newImageObjects]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const formDataToSend = new FormData();
    formDataToSend.append('_method', 'PUT');
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

    newImages.forEach((image, index) => formDataToSend.append(`new_images[${index}]`, image));
    deletedImages.forEach((imageId, index) => formDataToSend.append(`deleted_images[${index}]`, imageId));
    
    // Append primary image index
    formDataToSend.append('primary_image_index', primaryIndex);

    try {
      await axiosInstance.post(`/products/${slug}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/dashboard/product-list', { state: { success: 'Product updated successfully.' } });
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'Failed to update the product. Please try again.' });
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Edit Product</h2>
        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}
       
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
              <select
                name="brand_id"
                value={formData.brand_id}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Dropdown */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
              <select
                name="colour_id"
                value={formData.colour_id} // Correct property name
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Color</option>
                {colours.map((colour) => (
                  <option key={colour.id} value={colour.id}>
                    {colour.name}
                  </option>
                ))}
              </select>
            </div>


            {/* Size */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Size</label>
              <select
                name="size_id"
                value={formData.size_id}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Size</option>
                {sizes.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Supplier */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Supplier</label>
              <select
                name="supplier_id"
                value={formData.supplier_id}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Stock Quantity */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Stock Quantity</label>
              <input
                type="number"
                name="stock_quantity"
                value={formData.stock_quantity}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Product Image */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Product Image</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="block w-full text-gray-600"
              />
            </div>
          </div>









          <div>
            <EditProductImage images={images} setImages={setImages} setDeletedImages={setDeletedImages} setPrimaryIndex={setPrimaryIndex} />
          </div>
          <button
            type="submit"
            disabled={processing}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600"
          >
            {processing ? 'Updating...' : 'Update Product'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditProduct;

