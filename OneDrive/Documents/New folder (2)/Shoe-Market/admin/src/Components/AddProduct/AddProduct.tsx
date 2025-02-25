import React from 'react'
import styles from './AddProduct.module.css'
import upload_area from '../../assets/upload_area.jpg'
export const AddProduct = () => {
    const [image, setImage] = React.useState<File | null>(null);
    const [productDetails,setProductDetails] = React.useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    interface ProductDetails {
        name: string;
        image: string;
        category: string;
        new_price: string;
        old_price: string;
    }

    const changeHandeler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData: { success: boolean; image_url: string } | null = null;
        let product = productDetails;

        let formData = new FormData();
        if (image) {
            formData.append('product', image);
        }

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data: { success: boolean; image_url: string }) => { responseData = data as { success: boolean; image_url: string } })
        if (responseData && (responseData as { success: boolean; image_url: string }).success) {
            product.image = (responseData as { success: boolean; image_url: string }).image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp) => resp.json()).then(((data) =>{
                data.success?alert("Product Added"):alert("Failed")
            }))

        }
        
    }
  return (
    <div className={styles.addproduct}>
        <div className={styles.addproductfield}>
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandeler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className={styles.addproductprice}>
            <div className={styles.itemfield}>
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandeler} type="text" name="old_price" placeholder='Type here' />
            </div>
            <div className={styles.itemfield}>
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandeler} type="text" name="new_price" placeholder='Type here' />
            </div>
        </div>
        <div className={styles.itemfield}>
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandeler} name="category" className={styles.productselector}>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>

        <div className={styles.thumnial}>
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
            </label>
            <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className={styles.productbtn}>ADD</button>
    </div>
  )
}
