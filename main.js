$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        let valueInput = $("#pokemonInput").val();

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + valueInput,
            success: function (data) {
                let nombre = data.name
                let imagen = data.sprites.front_default
                let imagen1 = data.sprites.front_shiny
                let imagen2 = data.sprites.other.dream_world.front_default
                let imagen3 = data.sprites.other.home.front_default




                let peso = data.weight

                $("#pokeInfo").html(`
                    <div class="text-center">
                        
                        <h3>${nombre} - peso: ${peso} </h3>
                        <h1>Normal</h1>
                        <img src="${imagen}" alt="">
                        <br>
                        <h1>Shiny</h1>
                        <img src="${imagen1}" alt="">
                        <br>
                        <h1>Dream World</h1>
                        <img src="${imagen2}" alt="">
                        <br>
                        <br>
                        <h1>3D</>
                        <img src="${imagen3}" alt="">
                        <br>
                        <br>
                        <br>






                    </div>
                    
                `);
                console.log(data);
                

                let estadisticas = []

                data.stats.forEach( function (s){

                    estadisticas.push({
                        label: s.stat.name,
                        y: s.base_stat,
                    })

                })



                let config = {
                    animationEnabled : true,
                    title: {
                        text: "Estadisticas"
                    },
                    axisY: {
                        title: "Valor"
                    },
                    axisX: {
                        title: "Estadistica"
                    },
                    data: [
                        {
                            type: "column",
                            dataPoints: estadisticas
                        },
                    ],
                };

                let chart = new CanvasJS.Chart("pokeStats", config);
                chart.render()


            }
        })

    });
});