
// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return ( 
    <div className="container mx-auto px-4 mx-w-[1100px]">
      {children}
    </div>
  );
}
 
export default Container;