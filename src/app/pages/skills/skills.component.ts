import { Component } from '@angular/core';

import { PAGE_LOAD_AND_LEAVE } from 'src/app/animations/pages';
import { LANGUAGES } from 'src/app/data/languages';
import { SKILL_LEVELS } from 'src/app/data/skill-levels';
import { TOOLS } from 'src/app/data/tools';
import { ISkill, ISkillLevel } from 'src/app/interfaces/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [PAGE_LOAD_AND_LEAVE],
})
export class SkillsComponent {
  // This sorts both skill lists to put highest skill levels on top
  languages: ISkill[] = LANGUAGES.sort((a, b) => b.experience - a.experience);
  tools: ISkill[] = TOOLS.sort((a, b) => b.experience - a.experience);
  skillLevels: ISkillLevel[] = SKILL_LEVELS;

  skillLevel(experienceLevel: number): string | undefined {
    let matchingSkillLevel = this.skillLevels.find(
      (level: ISkillLevel) => level.experienceLevel === experienceLevel
    );

    if (matchingSkillLevel === undefined) {
      matchingSkillLevel = this.skillLevels.find(
        (level: ISkillLevel) =>
          level.experienceLevel < experienceLevel &&
          level.experienceLevel + 1 > experienceLevel
      );
    }

    return matchingSkillLevel?.name;
  }
}
