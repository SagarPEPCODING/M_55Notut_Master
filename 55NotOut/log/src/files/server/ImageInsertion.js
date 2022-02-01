import React, { Component } from 'react';
import blanckimg from '../publicImageFolder/blank-profile-picture-973460_640.png';
import '../css_Files/imageinsertion.css';
const fs = require('fs');
const request = require('request');
// import '../publicImageFolder/';

class ImageInsertion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileimage: '',
    };
  }

  componentDidMount = () => {
    this.setState({ profileimage: blanckimg });
  };

  imageHandler = (event) => {
    const reader = new FileReader();
    let uploaded_image_url = '';
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        uploaded_image_url = reader.result;
        this.setState({ profileimage: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0].name);

    const name_of_file = event.target.files[0].name;

    setTimeout(() => {
      // console.log(this.state.profileimage);
      var result = this.state.profileimage.split('/');
      console.log(result[result.length - 1]);
      fetch(uploaded_image_url, {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          response.arrayBuffer().then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement('a');
            console.log(link);
            link.href = url;
            // console.log(this.state.profileimage);
            link.setAttribute('download', `${name_of_file}`);
            document.body.appendChild(link);
            link.click();
          });
        })
        .catch((err) => {
          console.log(err);
        });

      // const download = (url, path, callback) => {
      //   request.head(url, (err, res, body) => {
      //     request(url).pipe(fs.createWriteStream(path)).on('close', callback);
      //   });
      // };

      // const url = this.state.profile;
      // const path = `../publicImageFolder/${name_of_file}`;

      // download(url, path, () => {
      //   console.log('✅ Done!');
      // });
    }, 1000);
  };

  render() {
    return (
      <div className='page'>
        <div className='container'>
          <h1 className='heading'>Add Your Image</h1>
          <div className='img-holder'>
            <img src={this.state.profileimage} alt='' className='img' />
          </div>
          <input
            type='file'
            name='image-upload'
            id='input'
            // accept='image/*'
            href={this.state.profileimage}
            onChange={this.imageHandler}
          />
        </div>
      </div>
    );
  }
}

export default ImageInsertion;

// const handleFile = (event) => {
//   event.preventDefault();
//   if(event.target.files[0])
//   {

//       setFile(event.target.files[0]);
//       setFilename(event.target.files[0].name);
//   }
// }

// const onClickHandler = async (e) => {
//    e.preventDefault();
//    const data = new FormData()
//    data.append('file', file)

//    try
//    {
//            const res = await axios.post("/upload", data, {
//                headers: {
//                    'Content-type': 'multipart/form-data'
//                }
//            })

//    console.log(res);
//    }

//    catch (error)
//    {
//       console.log(error);
//    }

// }
