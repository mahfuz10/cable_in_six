# README

i created the app to test - how to filter actioncable data from log in rails 6.

- Start server: rails s
- Open: http://localhost:3000 and Click "Test Cable" button

Now you should see body is filtered in log:

``` log
[ActionCable] Broadcasting to chat_Best Room: {"sent_by"=>"Paul 1", "body"=>"{filtered}"}
ChatChannel transmitting {"sent_by"=>"Paul 1", "body"=>"{filtered}"} (via streamed from chat_Best Room)
```


in console you should see this, that means our new code is working.

``` log
----------------------------------------
custom dispatch_action
----------------------------------------
```


Related links:

- https://github.com/rails/rails/issues/25088
  [ActionCable] No way to filter out any sensitive data which may be passed as an argument to the remote procedure over ws protocol

- https://stackoverflow.com/questions/59280904/actioncable-how-to-filter-out-any-sensitive-data-from-log-in-rails-5
  ActionCable - How to filter out any sensitive data from log in Rails 5
