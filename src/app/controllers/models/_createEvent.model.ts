class _createEventModel {
  title = '';
  short_description = '';
  event_date = new Date();
  number_of_people = 0;
  start_time = new Date();
  notice_hour = '';
  interests = [];
  address = '';
  lat = '';
  lng = '';
  gender = '';
  start_age = 0;
  end_age = 50;
  diet = [];
  language = '';
  education = '';
  carrier = '';
  hobbies = '';
  music = '';
  politic = '';
  relationship_status = '';
  drink = false;
  is_athlete = false;
  smoke = false;
  face_blur = false;
  religion = '';
  category = '';
  evenet_activities = '';
  thumbnail = '';
  city = '';
  country = '';
  clearModel = () => {
    this.title = '';
    this.short_description = '';
    this.event_date = new Date();
    this.number_of_people = 0;
    this.start_time = new Date();
    this.notice_hour = '';
    this.interests = [];
    this.address = '';
    this.lat = '';
    this.lng = '';
    this.gender = '';
    this.start_age = 0;
    this.end_age = 50;
    this.diet = [];
    this.language = '';
    this.education = '';
    this.carrier = '';
    this.hobbies = '';
    this.music = '';
    this.politic = '';
    this.relationship_status = '';
    this.drink = false;
    this.is_athlete = false;
    this.smoke = false;
    this.face_blur = false;
    this.religion = '';
    this.category = '';
    this.evenet_activities = '';
    this.thumbnail = '';
    this.city = '';
    this.country = '';
  };
}

const _createEvent = new _createEventModel();
export default _createEvent;
