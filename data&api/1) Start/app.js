 // Sync
 
 /*
                console.log("Fetch Image");
                fetch('setup.png').then(response=>{
                    console.log(response);
                    return response.blob();
                })
                .then(response=>{
                    console.log(response);
                    document.getElementById('api').src =URL.createObjectURL(response);
                })

                .catch(error=> {
                    console.log("error!");
                    console.error(error);
                })

        */

        // Async

        catchPhoto()
        .catch(error=> {
                    console.log("error!");
                    console.error(error);
                })

        async function catchPhoto() {
            const response = await fetch('setup.png');
            const blob = await response.blob();
            document.getElementById("api").src = URL.createObjectURL(blob);
        }