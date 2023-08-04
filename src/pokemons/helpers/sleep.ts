

export const sleep = ( seconds: number ):Promise<boolean> => {
  return new Promise( (resolve) => {

    setTimeout(() => {
      resolve(true);
    }, seconds * 1000 );

  });
}
