export const Block = (props) => {
   const {name} = props;
   const {age, sex} = props.data;

   return (
       <div>
          <p>{name}</p>
          <p>{age}</p>
          <p>{sex}</p>
       </div>
   )
};

