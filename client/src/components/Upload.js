import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addItems} from '../actions/postActions'


class Upload extends Component {
    state = { 
        img_urls : [],
        name:'',
        category:'',
        area:'',
        description:''
     }

    componentWillReceiveProps(prevprops){
        if(prevprops.item !== this.props.item) {
            windows.location.reload() 
        }
        console.log(prevprops.item)
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
     handleImageUpload = (e) => {
        e.preventDefault()
        const { files } = document.querySelector('input[type="file"]');
        Array.from(files).forEach((file) => {
            const formData = new FormData();
            formData.append('file', file);

            formData.append('upload_preset', 'pejln8hw')
            const options = {
            method: 'POST',
            body: formData,
            };

        fetch('https://api.Cloudinary.com/v1_1/jascowawa/image/upload', options)
            .then(res => res.json())
            .then(res => {
                this.setState({img_urls:[...this.state.img_urls, res.url]})
                this.setState({category:document.querySelector('.category').value})
                this.setState({area:document.querySelector('.area').value})
                if(files.length === this.state.img_urls.length) {this.props.addItems(this.state)}
            })
            .catch(err => console.log(err));

        })
                
      }
    render() {
        console.log(this.props.item)
        
        return (
            <div className="upload-conatianer">
                <h1>Upload the Products</h1>
                <div className="upload-body">
                    <form method="post">
                        <div>
                            <div>
                                <input onChange={this.onChange} value={this.state.name} name="name" type="text" placeholder="Product Name" />
                                
                            </div>
                            <div>
                                {/* <input onChange={this.onChange} value={this.state.category} name="category" type="text" placeholder="Category" /> */}
                                <select onChange={this.onChange} className="category">
                                    <option value="furniture">Furniture</option>
                                    <option value="fitting">Fitting</option>
                                </select>
                            </div>
                            <div>
                                {/* <input onChange={this.onChange} value={this.state.area} name="area" type="text" placeholder="Setting Area" /> */}
                                <select onChange={this.onChange} className="area">
                                    <option value="livingroom">Livingroom</option>
                                    <option value="kitchen">Kitchen</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="dinningroom">Dinningroom</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description">Description:-</label>
                                <textarea onChange={this.onChange} name="description" ></textarea>
                            </div>
                            <div>
                                <label htmlFor="picture">Upload Pictures:-</label>
                                <input onChange={this.onChange} type="file" multiple="multiple" />
                            </div>
                            <div>
                                <button onClick={this.handleImageUpload} type="submit">Upload</button>
                            </div>
                        </div>
                    </form>

                </div>
                <p style={{color: 'green'}}>{this.props.item ? 'Successfully Uploaded' : '' }</p>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    item: state.item.added_item
  })

export default connect(mapStateToProps, {addItems})(Upload);