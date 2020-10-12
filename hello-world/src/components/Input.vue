<template>
    <div>

        <div class="mainBody">
            <div class="row">
                <div class="column">
                    Raid date
                </div>
                <div class="column">
                    <input type="date" />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Raid name
                </div>
                <div class="column">
                    <input v-model="raidName" />
                </div>
            </div>

            <div class="row">
                <div class="column">
                    Warcraft logs folder
                </div>
                <div class="column">
                    <input type="text" v-model="logLocation" placeholder="C:\games\wow\_retail_\Logs" />
                </div>
            </div>

            <div class="row">
                <div class="column">
                    Raiders
                </div>
                <div class="column">
                    <textarea v-model="raiderNames">Boompie,lokzar,eox</textarea>
                </div>
            </div>

            <div class="row">
                <div class="column"><input type="submit" value="Submit" /></div>
                <div class="column"><input type="button" value="Clear" /></div>
            </div>

        </div>

    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'Input',
        el: '#input-example',
        data() {
            return {
                raidName: "This is a name",
                logLocation: "C:\\games\\wow\\_retail_\\Logs",
                date: null,
                raiderNames: ["a", "b", "c"],

                requestLogsModel: {
                    playerNames: "",
                    raidDate: "",
                    raidName: "",
                    logLocation: ""
                }

            }
        },
        method: {

            greet: function () {

                axios.post("http://localhost:8090/checkNames", this.requestLogsModel )
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })

            },

        }
    }
</script>
<style scoped>

</style>