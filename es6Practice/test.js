
// const fields = ['firstName', 'lastName', 'phoneNumber'];
      
// const props = { fields };

// console.log(props)


const canvasDimensions = (width, initialHeight) => {
    const height = initialHeight * 9 / 16;
    return { 
      width, 
      height 
    };
  }

 console.log(canvasDimensions(15,25))