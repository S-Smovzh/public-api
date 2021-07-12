export enum RulesEnum {
  TEL_NUM_MIN_LENGTH = "13",
  TEL_NUM_MAX_LENGTH = "20",
  PASSWORD_MIN_LENGTH = "8",
  PASSWORD_MAX_LENGTH = "50",
  USERNAME_MIN_LENGTH = "4",
  USERNAME_MAX_LENGTH = "30",
  EMAIL_LOCAL_OR_DOMAIN_PART_MIN_LENGTH = "1",
  EMAIL_LOCAL_PART_MAX_LENGTH = "63",
  EMAIL_DOMAIN_PART_MAX_LENGTH = "190",
  FIRST_AND_LAST_NAME_WHITELIST_SYMBOLS = "^[a-zA-Zа-яА-ЯЁёҐґЄєІіЇїs-]{1,50}$",
  PASSWORD_WHITELIST_SYMBOLS = "/^[\\d\\w%@?№$^]*$/"
}
