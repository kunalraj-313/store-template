import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showColorForm, setShowColorForm] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  
  // New state for main form data
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    outlet: '',
    description: '',
    material: '',
    colours: {}
  });

  // Modified color form data
  const [colorFormData, setColorFormData] = useState({
    colorName: '',
    size: '',
    price: '',
    stock: '',
    images: []
  });

  const handleMainFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Modified submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      colours: Object.fromEntries(
        Object.entries(formData.colours).map(([color, data]) => [
          color,
          {
            images: data.images.map(img => img.blob), // Convert to blob array
            sizes: data.sizes
          }
        ])
      )
    };
    console.log('Final form data:', finalData);
  };

  // Modified color save handler
  const handleColorSave = () => {
    const { colorName, size, price, stock } = colorFormData;
    setFormData(prev => {
      const newColours = { ...prev.colours };
      if (!newColours[colorName]) {
        newColours[colorName] = {
          images: imagePreviews.map(preview => ({
            url: preview.url,
            blob: preview.blob // Store blob for final submission
          })),
          sizes: {}
        };
      }
      newColours[colorName].sizes[size.toLowerCase()] = {
        price: parseFloat(price),
        stock: parseInt(stock)
      };
      return {
        ...prev,
        colours: newColours
      };
    });
    
    setColorFormData({ colorName: '', size: '', price: '', stock: '', images: [] });
    setImagePreviews([]);
    setShowColorForm(false);
  };

  // Modified image upload handler
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const previews = await Promise.all(files.map(async file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      blob: file // Store the file for later conversion
    })));
    setImagePreviews(previews);
  };

  const handleColorFormChange = (e) => {
    const { name, value } = e.target;
    setColorFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    setShowForm(true);
  };

  // Reset form when closing
  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      name: '',
      category: '',
      outlet: '',
      description: '',
      material: '',
      colours: {}
    });
    setImagePreviews([]);
    setShowColorForm(false);
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Product Management</h1>
        </div>
        
        <div className="add-button-container">
          <button 
            className="button button-primary"
            onClick={handleAddProduct}
          >
            Add New Product
          </button>
        </div>

        {showForm && (
          <div className="form-container">
            <h2 className="form-title">Add New Product</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleMainFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-select"
                    name="category"
                    value={formData.category}
                    onChange={handleMainFormChange}
                  >
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Outlet</label>
                  <select 
                    className="form-select"
                    name="outlet"
                    value={formData.outlet}
                    onChange={handleMainFormChange}
                  >
                    <option value="">Select outlet</option>
                    <option value="main">Main Store</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Material</label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleMainFormChange}
                    className="form-input"
                    placeholder="Enter material"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleMainFormChange}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setShowColorForm(true)}
                >
                  Add Color Variant
                </button>

                {showColorForm && (
                  <div className="color-form">
                    <div className="form-group">
                      <label className="form-label">Color Name</label>
                      <input
                        type="text"
                        name="colorName"
                        value={colorFormData.colorName}
                        onChange={handleColorFormChange}
                        className="form-input"
                        placeholder="e.g., red, blue, white"
                      />
                    </div>

                    <div className="form-grid">
                      <div className="form-group full-width">
                        <label className="form-label">Images</label>
                        <div className="image-upload-container">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="form-input"
                            onChange={handleImageUpload}
                          />
                          <div className="image-previews">
                            {imagePreviews.map((preview, index) => (
                              <div key={index} className="image-preview-item">
                                <img 
                                  src={preview.url} 
                                  alt={preview.name}
                                  style={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    objectFit: 'cover',
                                    margin: '5px'
                                  }} 
                                />
                                <button
                                  type="button"
                                  className="button button-small"
                                  onClick={() => {
                                    URL.revokeObjectURL(preview.url);
                                    setImagePreviews(prev => 
                                      prev.filter((_, i) => i !== index)
                                    );
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="form-group full-width">
                        <label className="form-label">Size</label>
                        <select 
                          className="form-select"
                          name="size"
                          value={colorFormData.size}
                          onChange={handleColorFormChange}
                        >
                          <option value="">Select size</option>
                          <option value="S">Small</option>
                          <option value="M">Medium</option>
                          <option value="L">Large</option>
                          <option value="XL">Extra Large</option>
                        </select>
                      </div>

                      <div className="form-horizontal">
                        <div className="form-group">
                          <label className="form-label">Price</label>
                          <input
                            type="number"
                            className="form-input"
                            name="price"
                            value={colorFormData.price}
                            onChange={handleColorFormChange}
                            min="0"
                            step="0.01"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Stock</label>
                          <input
                            type="number"
                            className="form-input"
                            name="stock"
                            value={colorFormData.stock}
                            onChange={handleColorFormChange}
                            min="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-footer">
                      <button
                        type="button"
                        className="button button-secondary"
                        onClick={() => setShowColorForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="button button-primary"
                        onClick={handleColorSave}
                      >
                        Save Color
                      </button>
                    </div>
                  </div>
                )}

                {Object.keys(formData.colours).length > 0 && (
                  <div className="color-cards">
                    {Object.entries(formData.colours).map(([colorName, colorData], index) => (
                      <div key={index} className="color-card">
                        <div className="color-card-images">
                          {colorData.images.slice(0, 1).map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={image.url}
                              alt={image.name}
                              style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover'
                              }}
                            />
                          ))}
                          {colorData.images.length > 1 && (
                            <span className="more-images">+{colorData.images.length - 1}</span>
                          )}
                        </div>
                        <div className="color-card-details">
                          <p>Color: {colorName}</p>
                          {Object.entries(colorData.sizes).map(([size, sizeData], sizeIndex) => (
                            <div key={sizeIndex}>
                              <p>Size: {size}</p>
                              <p>Price: ${sizeData.price}</p>
                              <p>Stock: {sizeData.stock}</p>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="button button-small"
                          onClick={() => {
                            colorData.images.forEach(img => URL.revokeObjectURL(img.url));
                            setFormData(prev => {
                              const newColours = { ...prev.colours };
                              delete newColours[colorName];
                              return { ...prev, colours: newColours };
                            });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-footer">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="button button-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button button-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
