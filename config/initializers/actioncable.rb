ActionCable::Channel::Base.class_eval do
  def dispatch_action(action, data)
    # logger.info action_signature(action, data)

    puts '----------------------------------------'
    puts "custom dispatch_action"
    # puts data.inspect
    puts '----------------------------------------'

    # .......... filter data start ..........
    filtered_data = data
    filtered_data['body'] = '{filtered}' if filtered_data['body'].present?
    logger.info action_signature(action, filtered_data)
    # .......... ./filter data end ..........

    if method(action).arity == 1
      public_send action, data
    else
      public_send action
    end
  rescue Exception => exception
    rescue_with_handler(exception) || raise
  end
end