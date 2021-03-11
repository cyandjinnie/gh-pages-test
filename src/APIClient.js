const baseUrl = "http://localhost:8000/api/";

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

const APIRequest = async function(method, body) {
    const http_response = await Fetch(method + "/", {
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
            return APIRequest("new_character", JSON.stringify({ id, desc }))
        },

        ChangeMood: function(id, new_mood) {
            return APIRequest("change_mood", JSON.stringify({ id, new_mood }))
        },

        TriggerEvent: function(id, event_desc, attitude) {
            return APIRequest("trigger_event", JSON.stringify({ id, event_desc, attitude }))
        },

        GetReplyFromCharacter: function(id, user_message, user_name) {
            return APIRequest("request_reply", JSON.stringify({ id, user_message, user_name }))
        },

        CreateUserSession: function() {
            return APIRequest("create_user_session", "")
        },

        
    }
})()

export default APIClient