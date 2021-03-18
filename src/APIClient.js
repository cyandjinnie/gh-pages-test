const baseUrl = "https://r4xp4nhmja.execute-api.eu-west-2.amazonaws.com/default/processMVPEvent";

const Fetch = function(url, init) {
    let headers

    if (init) {
        if (init.headers) {
            headers = init.headers
        } else {
            headers = {}
        }
    } else {
        headers = {}
    }

    console.log(init)
    console.log(headers)

    return fetch(`${baseUrl}${url}`, { ...init, headers })
}

const APIRequest = async function(body) {
    let method = body["method"]

    const http_response = await Fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: body
    })

    if (!http_response.ok) {
        throw "Couldn't get '" + method + "' response"
    }

    const json_response = await http_response.json()

    if (!json_response.ok) {
        throw "Error while parsing '" + method + "' response"
    }

    const { result, status } = json_response
    if (status !== "OK") {
        console.error("Reponse status != OK, query " + method)
    }

    return result
}

const APIClient = (function() {
    return {
        NewCharacter: function(id, desc) {
            let method = "new_character"
            let params = [id, desc]
            return APIRequest(JSON.stringify({ method, params }))
        },

        ChangeMood: function(id, new_mood) {
            let method = "change_mood"
            let params = [id, new_mood]
            return APIRequest(JSON.stringify({ method, params }))
        },

        TriggerEvent: function(id, event_desc, attitude) {
            let method = "trigger_event"
            let params = [id, event_desc, attitude]
            return APIRequest(JSON.stringify({ method, params }))
        },

        GetReplyFromCharacter: function(id, user_message, user_name) {
            let method = "request_reply"
            let params = [id, user_message, user_name]
            return APIRequest(JSON.stringify({ method, params }))
        },

        CreateUserSession: function() {
            let method = "create_user_session"
            let params = []
            return APIRequest(JSON.stringify({ method, params }))
        },

        
    }
})()

export default APIClient