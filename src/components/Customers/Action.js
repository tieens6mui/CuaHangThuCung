import { useEffect, useState } from "react";

export const ActionsProduct = () => {
  let [products, setProducts] = useState([]);

    //userLength is for showing the Data Loading message.
  let [productLength, setProductLength] = useState(null);

  useEffect(() => {
    fetch("http://localhost/php-react/Product/all-sp.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProducts(data.products.reverse());
          setProductLength(true);
        } else {
          setProductLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Inserting a new user into the database.
  const insertProduct = (newProduct) => {
    fetch("http://localhost/php-react/Product/add-sp.php", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.maPet) {
          setProducts([
            {
              maPet: data.maPet,
              ...newProduct,
            },
            ...products,
          ]);
          setProductLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editModeProduct = (maPet) => {
    products = products.map((product) => {
      if (product.maPet === maPet) {
        product.isEditing = true;
        return product;
      }
      product.isEditing = false;
      return product;
    });
    setProducts(products);
  };

  // Cancel the edit mode.
  const cancelEditProduct = (maPet) => {
    products = products.map((product) => {
      if (product.maPet === maPet) {
        product.isEditing = false;
        return product;
      }
      return product;
    });
    setProducts(products);
  };

  // Updating a user.
  const updateProduct = (productData) => {
    fetch("http://localhost/doan/public/Product/update-sp.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          products = products.map((product) => {
            if (product.maPet === productData.maPet) {
              product.isEditing = false;
              product.tenPet = productData.tenPet;
              product.giaPet = productData.giaPet;
              product.moTa = productData.moTa;
              product.hinhPet = productData.hinhPet;
              return product;
            }
            return product;
          });
          alert(data.msg);
          setProducts(products);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deleteProduct = (theID) => {
      // filter outing the user.
    let productDeleted = products.filter((product) => {
      return product.maPet !== theID;
    });
    fetch("http://localhost/php-react/Product/delete-sp.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ maPet: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProducts(productDeleted);
          if (products.length === 1) {
            setProductLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    products,
    editModeProduct,
    cancelEditProduct,
    updateProduct,
    insertProduct,
    deleteProduct,
    productLength,
  };
};