

const UnityWindow = ({url}) =>{
    return (
        <>
        <iframe src={url} style={{width:960, height:600}}></iframe>
        </>
      );
}
export default(UnityWindow);