# TrainMQTT.js

This is a javascipt implementation of TrainMQTT where objects can be serialized for transporting MQTT messages.


## Compile script for TrainMQTT.js

Requires [https://github.com/google/closure-compiler] from Google.

    java -jar compiler.jar --js_output_file=TrainMQTT.js/TrainMQTT.js TrainMQTT.js/classes/engine.js TrainMQTT.js/classes/trainMQTTMessage.js TrainMQTT.js/classes/power.js
