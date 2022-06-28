import { body } from "express-validator";
import { MessageEnum } from '../../../enums';
import ValidatorUtils from "../../../utils/ValidatorUtils";

export default class LoginValidator {
  private usernameMaxLength = 32
  private passwordMaxLength = 16
  private passwordMinLength = 8
  private validatorUtils = new ValidatorUtils()

  createValidator = [
    body('username')
      .isString()
      .withMessage(MessageEnum.NEED_BE_A_STRING)
      .notEmpty()
      .withMessage(MessageEnum.MANDATORY_FIELD)
      .isAlphanumeric()
      .withMessage(MessageEnum.ONLY_ALFA_NUMERIC)
      .isLength({ max: this.usernameMaxLength })
      .withMessage(`${MessageEnum.MAX_CHARACTER_LENGTH}: ${this.usernameMaxLength}`),
    body('password')
      .isString()
      .withMessage(MessageEnum.NEED_BE_A_STRING)
      .notEmpty()
      .withMessage(MessageEnum.MANDATORY_FIELD)
      .custom(value => this.validatorUtils.isLength(value, this.passwordMinLength, this.passwordMaxLength)),
  ]
}