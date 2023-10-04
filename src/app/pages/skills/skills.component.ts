import { Component } from '@angular/core';

import { PAGE_LOAD_AND_LEAVE } from 'src/app/animations/pages';
import { LANGUAGES } from 'src/app/data/languages';
import { TOOLS } from 'src/app/data/tools';
import { ISkill } from 'src/app/interfaces/skills';

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
}
