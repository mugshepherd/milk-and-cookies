class RemindersController < ApplicationController

# regular rails app with most CRUD.  only difference is that this is rendering JSON. 
#status: 200 means "ok" status
# backend 
  def index
    @reminders = Reminder.all
    render status: 200, json: @reminders.to_json
  end

  def show
    @reminder = Reminder.find(params[:id])
    render status: 200, json: @reminder.to_json
  end

  def create
    @reminder = Reminder.new(reminder_params)
    if @reminder.save
      render json: @reminder.to_json, status: 200
    end
  end

  def update
    @reminder = Reminder.find(params[:id])
    if @reminder.update(reminder_params)
      render json: @reminder.to_json, status: 200
    end
  end

  def destroy
    @reminder = Reminder.find(params[:id])
    if @reminder.destroy
      render json: @reminder.to_json, status: 200
    end
  end

  private
  def reminder_params
    params.require(:reminder).permit(:body, :completed)
  end
end
