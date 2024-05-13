import ClipLoader from "react-spinners/ClipLoader"


const override = {
    display:'block',
    margin: "100px auto"
}

const Spinner = (args:{loading:boolean}) => {
  return (
    <ClipLoader 
        color="4338ca"
        loading={args.loading}
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinner