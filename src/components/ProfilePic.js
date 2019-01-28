import React, {Component} from 'react';

const fr = new FileReader();


class ProfilePic extends Component {
    constructor(props) {
        super(props);
    
        this.fileInput = React.createRef();

        this.previewImage = '';

        this.fakeClick = this.fakeClick.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.writeImage = this.writeImage.bind(this);

    }

    writeImage() {
        const url = fr.result;
        this.previewImage = url;
        this.props.handleUrl(url);
    }    

    fakeClick(){
        this.fileInput.current.click();
    }

    handleFileChange(e) {
        const myFile = e.currentTarget.files[0];
        
        fr.addEventListener('load', this.writeImage);
        fr.readAsDataURL(myFile);
    };

    render() {
        return (
            <React.Fragment>
                 <input type="file" className="hidden__icon" ref={this.fileInput} onChange={this.handleFileChange} />
                <button className="btn--img" type="button" onClick={this.fakeClick}>Añadir Imagen</button>    
                <div className="uploadFile" style={{backgroundImage: `url(${this.previewImage})` }} ref={this.props.previewRef}></div>

            </React.Fragment>
        );
    }

}
export default ProfilePic;