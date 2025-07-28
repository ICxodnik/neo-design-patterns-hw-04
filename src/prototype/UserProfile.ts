import { UserProfilePrototype } from './UserProfilePrototype';

type Permissions = {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
};

type Department = 'finance' | 'engineering' | 'marketing';

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: Permissions
  ) {}

  clone() {
    return new UserProfile(this.username, this.department, {
      ...this.permissions,
    });
  }
}
