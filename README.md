# README

This README would normally document whatever steps are necessary to get the
application up and running.

- Start server: rails s
- Open: http://localhost:3000
- Click "Test Cable" button

Now you should see body is filtered in log:

```
[ActionCable] Broadcasting to chat_Best Room: {"sent_by"=>"Paul 1", "body"=>"{filtered}"}
ChatChannel transmitting {"sent_by"=>"Paul 1", "body"=>"{filtered}"} (via streamed from chat_Best Room)
```


in console you should see this, that means our new code is working.

```
----------------------------------------
custom dispatch_action
----------------------------------------
```
